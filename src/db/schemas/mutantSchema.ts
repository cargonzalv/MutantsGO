import { Schema, Document, model, Model } from 'mongoose';

export interface MutantAttrs {
  dna: string[];
  is_mutant?: boolean;
}

export interface MutantModel extends Model<MutantDocument> {
  addOne(doc: MutantAttrs): MutantDocument;
}
export interface MutantDocument extends Document {
  dna: string[];
  is_mutant: boolean;
  createdAt: string;
  updatedAt: string;
}
export const mutantSchema: Schema = new Schema(
  {
    dna: {
      type: [String],
      required: true,
    },
    is_mutant: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

mutantSchema.statics.addOne = (doc: MutantAttrs) => {
  return new Mutant(doc);
};
export const Mutant = model<MutantDocument, MutantModel>('Mutant', mutantSchema);
