// import * as yup from 'yup';

// import { InputType } from './schema/util';

// type Schema = {
//   name: string;
//   key: string;
//   description: string;
//   selector?: (_row) => string;
//   sortable?: boolean;
//   inputType: InputType;
//   required?: boolean;
//   validator?: any;
//   options?: any[];
// };

// const BandSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'Enter name of band',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputTypeå.HIDDEN,
//   },
//   {
//     name: 'Name of Band',
//     key: 'name',
//     description: 'Enter name of band',
//     selector: (row) => row.name,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Band Type',
//     key: 'bandType',
//     description: 'Enter åname of band',
//     selector: (row) => row.bandType,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_LIST,
//   },
//   {
//     name: 'Description of Band',
//     key: 'description',
//     description: 'Enter description of band',
//     selector: (row) => row.description,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
// ];

// const RevenueSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'Enter name of Revenue',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Date',
//     key: 'createdAt',
//     description: 'Enter date',
//     selector: (row) => row.createdAt && row.createdAt.substring(0, 10),
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Description',
//     key: 'description',
//     description: 'Enter name of description',
//     selector: (row) => row.description,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Client',
//     key: 'fromName',
//     description: 'Enter Client',
//     selector: (row) => row.fromName,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Amount',
//     key: 'amount',
//     description: 'Enter Amount',
//     selector: (row) => row.amount,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Mode',
//     key: 'paymentmode',
//     description: 'Enter Mode',
//     selector: (row) => row.paymentmode,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
// ];

// const CollectionSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'Enter name of Revenue',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Name',
//     key: 'fromName',
//     description: 'Enter Client',
//     selector: (row) => row.fromName,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Client',
//     key: 'toName',
//     description: 'Enter name of description',
//     selector: (row) => row.toName,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },

//   {
//     name: 'Amount',
//     key: 'amount',
//     description: 'Enter Amount',
//     selector: (row) => row.amount,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Mode',
//     key: 'paymentmode',
//     description: 'Enter Mode',
//     selector: (row) => row.paymentmode,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
// ];
// const EmployeeSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'Enter name of employee',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Firstname',
//     key: 'firstname',
//     description: 'Enter firstname',
//     selector: (row) => row.firstname,

//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Last Name',
//     key: 'lastname',
//     description: 'Enter lastname',
//     selector: (row) => row.lastname,

//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Profession',
//     key: 'profession',
//     description: 'Enter profession',
//     selector: (row) => row.profession,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Phone number',
//     key: 'phone',
//     description: 'Enter phone number',
//     selector: (row) => row.phone,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Email',
//     key: 'email',
//     description: 'Enter Email',
//     selector: (row) => row.email,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Department',
//     key: 'department',
//     description: 'Enter department',
//     selector: (row) => row.department,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Department Unit',
//     key: 'deptunit',
//     description: 'Enter department',
//     selector: (row) => row.deptunit,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
// ];

// const LocationSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'Enter name of location',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Name of Location',
//     key: 'name',
//     description: 'Enter name of Location',
//     selector: (row) => row.name,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Location Type',
//     key: 'locationType',
//     description: 'Enter name of Location',
//     selector: (row) => row.locationType,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_LIST,
//   },
// ];

// const OrganisationSchema: Schema[] = [
//   {
//     name: 'S/N',
//     key: '_id',
//     description: 'ID',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Name',
//     key: 'facilityName',
//     description: 'Name of Organization',
//     selector: (row) => row.facilityName,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//     validator: yup.string().min(5, 'Enter a valid Organnisation name'),
//   },
//   {
//     name: 'CAC Number',
//     key: 'facilityCACNumber',
//     description: 'CAC Number',
//     selector: (row) => row.facilityName,
//     sortable: true,
//     required: true,
//     inputType: InputType.NUMBER,
//     validator: yup.number().min(5, 'Enter a valid CAC number'),
//   },
//   {
//     name: 'Country',
//     key: 'facilityCountry',
//     description: 'Facility Country',
//     selector: (row) => row.facilityCountry,
//     sortable: true,
//     required: true,
//     options: ['Nigeria'],
//     inputType: InputType.SELECT_LIST,
//   },
//   {
//     name: 'State',
//     key: 'facilityState',
//     description: 'Organization State',
//     selector: (row) => row.facilityState,
//     sortable: true,
//     required: true,
//     options: ['Lagos'],
//     inputType: InputType.SELECT_LIST,
//   },
//   {
//     name: 'LGA',
//     key: 'facilityLGA',
//     description: 'LGA',
//     selector: (row) => row.facilityLGA,
//     sortable: true,
//     required: true,
//     options: ['Lagos'],
//     inputType: InputType.SELECT_LIST,
//   },

//   {
//     name: 'City',
//     key: 'facilityCity',
//     description: 'Organization City',
//     selector: (row) => row.facilityCity,
//     sortable: true,
//     required: true,
//     options: ['Lagos'],
//     inputType: InputType.SELECT_LIST,
//   },

//   {
//     name: 'Address',
//     key: 'facilityAddress',
//     description: 'Organization Registered Address',
//     selector: (row) => row.facilityAddress,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//     validator: yup.string().min(10, 'Enter a valid Address'),
//   },

//   {
//     name: 'Phone  Number',
//     key: 'facilityContactPhone',
//     description: 'Organization Contact Phone Number',
//     selector: (row) => row.facilityContactPhone,
//     sortable: true,
//     required: true,
//     inputType: InputType.PHONE,
//     validator: yup
//       .string()
//       .min(10, 'Enter a  Phone number')
//       .max(13, 'Enter a Phone number'),
//   },

//   {
//     name: 'Email',
//     key: 'facilityEmail',
//     description: 'Organization Email',
//     selector: (row) => row.facilityContactPhone,
//     sortable: true,
//     required: true,
//     inputType: InputType.EMAIL,
//     validator: yup.string().email(),
//   },
//   {
//     name: 'CEO',
//     key: 'facilityOwner',
//     description: 'Organization CEO',
//     selector: (row) => row.facilityOwner,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },

//   {
//     name: 'Org Type',
//     key: 'facilityType',
//     description: 'Organization Type',
//     selector: (row) => row.facilityType,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_LIST,
//     options: ['Hospital', 'Laboratory'],
//   },
//   {
//     name: 'Org Category',
//     key: 'facilityCategory',
//     description: 'Organization Category',
//     selector: (row) => row.facilityCategory,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_LIST,
//     options: ['Health', 'Finance'],
//   },
// ];

// const ModulesSchema = [
//   {
//     name: 'Module 1',
//     key: 'modules',
//     description: 'Modules',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     options: [
//       { label: 'Accounting', value: 'moduleAccounting' },
//       { label: 'Admin', value: 'moduleAdmin' },
//       { label: 'Blood Bank', value: 'moduleBlood Bank' },
//       { label: 'Client', value: 'moduleClient' },
//       { label: 'Clinic', value: 'moduleClinic' },
//       { label: 'Communication', value: 'moduleCommunication' },
//       {
//         label: 'Continous Mediscal Education',
//         value: 'moduleContinous Mediscal Education',
//       },
//       { label: 'Documentation', value: 'moduleDocumentation' },
//       { label: 'Epidemiology', value: 'moduleEpidemiology' },
//       { label: 'Finance', value: 'moduleFinance' },
//       { label: 'Immunization', value: 'moduleImmunization' },
//     ],
//     inputType: InputType.CHECKBOX,
//   },
//   {
//     name: 'Module 2',
//     key: 'modules',
//     description: 'Modules',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     options: [
//       { label: 'Inventory', value: 'moduleInventory' },
//       { label: 'Laboratory', value: 'moduleLaboratory' },
//       { label: 'Managed Care', value: 'moduleManaged Care' },
//       { label: 'Patient Portal', value: 'modulePatient Portal' },
//       { label: 'Pharmacy', value: 'modulePharmacy' },
//       { label: 'Radiology', value: 'moduleRadiology' },
//       { label: 'Report', value: 'moduleReport' },
//       {
//         label: 'Research and Data Exhange',
//         value: 'moduleResearch and Data Exhange',
//       },
//       { label: 'Telemedicine', value: 'moduleTelemedicine' },
//       { label: 'Theatre', value: 'moduleTheatre' },
//       { label: 'User Profile', value: 'moduleUser Profile' },
//     ],
//     inputType: InputType.CHECKBOX,
//   },
// ];

// const OnboardingEmployeeSchema = [
//   {
//     name: 'Firstname',
//     key: 'firstname',
//     description: 'Firstname',
//     inputType: InputType.TEXT,
//     required: true,
//   },
//   {
//     name: 'Lastname',
//     key: 'lastname',
//     description: 'Lastname',
//     inputType: InputType.TEXT,
//     required: true,
//   },
//   {
//     name: 'Organization Email',
//     key: 'email',
//     description: 'Organnisation  Email',
//     inputType: InputType.TEXT,
//     required: true,
//   },
//   {
//     name: 'Personal email',
//     key: 'personalEmail',
//     description: 'Personal email',
//     inputType: InputType.TEXT,
//     required: true,
//   },
//   {
//     name: 'Phone number',
//     key: 'phone',
//     description: 'Enter phone number',
//     inputType: InputType.TEXT,
//     required: true,
//   },

//   {
//     name: 'Country',
//     key: 'facilityCountry',
//     description: 'Facility Country',
//     options: ['Nigeria'],
//     inputType: InputType.SELECT_LIST,
//     required: true,
//   },
//   {
//     name: 'State',
//     key: 'facilityState',
//     description: 'Organization State',
//     options: ['Lagos'],
//     inputType: InputType.SELECT_LIST,
//     required: true,
//   },
//   {
//     name: 'Department',
//     key: 'department',
//     description: 'Enter department',
//     options: ['Front Desk', 'Accounting', 'Clinic', 'Pharmacy'],
//     inputType: InputType.SELECT_LIST,
//     required: true,
//   },
//   {
//     name: 'Department Unit',
//     key: 'deptunit',
//     description: 'Enter department',
//     options: ['Unit 1', 'Unnit 1', 'Unit 1', 'unit 2'],
//     inputType: InputType.SELECT_LIST,
//     required: true,
//   },
// ];

// const getResolver = (schema: Schema[]) => {
//   const validators = {};
//   const requiredValidator = (required, name) =>
//     required && yup.string().required(`Field: ${name} is required`);
//   schema.forEach(({ name, key, validator, required }) => {
//     const func = validator || requiredValidator(required, name);
//     if (func) validators[key] = func;
//   });
//   return yup.object(validators);
// };

// export {
//   BandSchema,
//   CollectionSchema,
//   EmployeeSchema,
//   getResolver,
//   InputType,
//   LocationSchema,
//   ModulesSchema,
//   OnboardingEmployeeSchema,
//   OrganisationSchema,
//   RevenueSchema,
// };

export {};
