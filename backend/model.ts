export type Student = { // Corrected from 'int' to 'number'
    fullname: string,
    position: string,
    companyName: string,
    email: string,
    internship?: boolean, // Made optional with '?'
    entryLevel?: boolean  // Made optional with '?'
}
