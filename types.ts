export interface SignatureData {
  fullName: string;
  position: string;
  phone: string;
  email: string;
  photoUrl: string;
  personalLinkedin: string;
  showLinkedin: boolean;
  signatureType: 'personal' | 'department';
}

export const INITIAL_DATA: SignatureData = {
  fullName: "Julian Salazar",
  position: "Procurement",
  phone: "+49 176 82142807",
  email: "julian.salazar@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=julian",
  personalLinkedin: "https://www.linkedin.com/in/username",
  showLinkedin: true,
  signatureType: 'personal',
};