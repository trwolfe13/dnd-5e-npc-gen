import { Reference } from "../reference";
import { Archetype } from "./archetype";

export class Class {
    name: string;
    reference: Reference;
    primaryStat: string;
    archetypeName: { singular: string, plural: string };
    archetypes?: Archetype[];
};