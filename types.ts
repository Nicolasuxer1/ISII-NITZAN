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
  fullName: "Nicolas Vargas",
  position: "Technical Director",
  phone: "+41 44 123 4567",
  email: "n.vargas@isii-nitzan.swiss",
  photoUrl: "https://i.pravatar.cc/150?u=nicolas",
  personalLinkedin: "https://www.linkedin.com/in/nicolasvargas",
  showLinkedin: true,
  signatureType: 'personal',
};