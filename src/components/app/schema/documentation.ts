const AllergySchema = [
  {
    name: 'Allergine',
    key: 'allergine',
    selector: (row) => row.allergine,
  },
  {
    name: 'Reaction',
    key: 'reaction',
    selector: (row) => row.reaction,
  },
];

const BillOrderSchema = [
  {
    name: 'Category',
    selector: (row) => row.category,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
  },
  {
    name: 'Quantity',
    selector: (row) => row.quantity,
  },
  {
    name: 'Unit',
    selector: (row) => row.baseunit,
  },
  {
    name: 'Selling Price',
    selector: (row) => row.sellingprice,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
  },
  {
    name: 'illing Mode',
    selector: (row) => row.billMode.type,
  },
];

const LaboratorySchema = () => [
  {
    name: 'Test',
    selector: (row) => row.test,
  },
  {
    name: 'Notes',
    selector: (row) => row.destiation,
  },
];

const MedicationSchema = [
  {
    name: 'Drug Name',
    selector: (row) => row.drugname,
  },
  {
    name: 'Strength/Frequency',
    selector: (row) => row.strengthfreq,
  },
  {
    name: 'Notes',
    selector: (row) => row.notes,
  },
];

const PresentingComplaintSchema = [
  {
    name: 'Symptoms',
    selector: (row) => row.symptom,
  },
  {
    name: 'Duration',
    selector: (row) => row.duration,
  },
];

const PrescriptionSchema = [
  {
    name: 'Medication',
    selector: (row) => row.instruction,
  },
  {
    name: 'Destination',
    selector: (row) => row.destination,
  },
];

const GenericTableSchema = [
  {
    name: '',
    selector: (row) => row.key,
  },
  {
    name: '',
    selector: (row) => row.value,
  },
];

const generateSchema = (keys) =>
  keys.map((key) => ({
    name: key,
    key,
    selector: (row) => row[key],
  }));

export {
  AllergySchema,
  BillOrderSchema,
  generateSchema,
  GenericTableSchema,
  LaboratorySchema,
  MedicationSchema,
  PrescriptionSchema,
  PresentingComplaintSchema,
};