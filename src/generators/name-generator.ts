import { NumberGenerator } from "./number-generator";

import * as Markov from "../markov";
import * as Races from "../models/races"
import * as _ from "lodash";

export class NameGenerator {
    private numGen: NumberGenerator = new NumberGenerator();

    constructor(private definition: Races.NameDefinition, private gender: string) {
        // // TODO: Fix this.
        if (this.gender === "N") { this.gender = "M"; }

        // TODO: Cache pre-populate Markov generators.
    }

    getName(): string {
        // Choose a name format.
        const def = this.definition;
        let format = def.formats[0];
        if (def.formats.length > 0) {
            format = def.formats[this.numGen.rollDie(def.formats.length) - 1];
        }

        // Replace the parts of the format.
        const name = format.replace(/{(.+?)}/g, (match, part) => {
            const partDef = def.parts[part];
            if (!partDef) {
                throw new RangeError(`Name part ${part} has no definition.`);
            }
            return this.getNamePart(partDef);
        });
        return _.capitalize(name).replace(/[ -']./g, match => {
            return match.toUpperCase();
        });
    }

    getNamePart(partDef: Races.NamePartDefinition): string {
        // For surnames.
        let gender = this.gender;
        const availableGenders = Object.keys(partDef.source);
        if (availableGenders.indexOf(gender) < 0) { gender = availableGenders[0]; }

        if (partDef.mode === "item") {
            const index = this.numGen.rollDie(partDef.source[gender].length) - 1;
            return partDef.source[gender][index];
        } else {
            const generator = new Markov.MarkovChain<string>(partDef.markovOrder);
            partDef.source[gender].forEach(n => {
                generator.add(n.split(""));
            });

            // Try 10 times for a reasonable length.
            for (let x = 0; x < 10; x++) {
                const replacement = generator.walk().join("");
                if (replacement.length < (partDef.maxLength || 10) && replacement.length > 2) {
                    return replacement;
                }
            }

            // Return whatever.
            return generator.walk().join("");
        }
    }
};
