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
  fullName: "Nicolás Vargas Galindo",
  position: "Lead UX / UI Designer",
  phone: "+57 315 648 3490",
  email: "nicolas.vargas@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=johndoe",
  personalLinkedin: "https://www.linkedin.com/in/username",
  showLinkedin: true,
};