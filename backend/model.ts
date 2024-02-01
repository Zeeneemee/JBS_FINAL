export type Student = {
    id: number, // Corrected from 'int' to 'number'
    FullName: string,
    Position: string,
    CompanyName: string,
    Email: string,
    Internship?: boolean, // Made optional with '?'
    EntryLevel?: boolean  // Made optional with '?'
}
