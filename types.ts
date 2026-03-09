export interface SignatureData {
  fullName: string;
  position: string;
  phone: string;
  email: string;
  photoUrl: string;
  personalLinkedin: string;
  showLinkedin: boolean;
}

export const INITIAL_DATA: SignatureData = {
  fullName: "Nicolas Vargas",
  position: "Technical Director",
  phone: "+41 44 123 4567",
  email: "n.vargas@isii-nitzan.swiss",
  photoUrl: "https://cdn.sanity.io/images/1e0st73j/production/d96987d8eb712f280a375254685348e477810087-200x200.jpg?w=2000&fit=max&auto=format&dpr=2",
  personalLinkedin: "https://www.linkedin.com/in/nicolasvargas",
  showLinkedin: true,
};