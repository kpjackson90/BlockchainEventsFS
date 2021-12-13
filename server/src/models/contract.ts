import mongoose from 'mongoose';
const { Schema } = mongoose;

interface ContractAttrs {
  fromAddress: string;
  createdString: string;
}

interface ContractModel extends mongoose.Model<IContract> {
  build(attrs: ContractAttrs): IContract;
}

interface IContract extends mongoose.Document {
  fromAddress: string;
  createdString: string;
}

const ContractSchema = new Schema<IContract>(
  {
    fromAddress: {
      type: String,
    },
    createdString: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        (ret.id = ret._id), delete ret._id;
      },
    },
  }
);

ContractSchema.statics.build = (attrs: ContractAttrs) => {
  return new Contract(attrs);
};

const Contract = mongoose.model<IContract, ContractModel>(
  'Contract',
  ContractSchema
);

export { Contract };
