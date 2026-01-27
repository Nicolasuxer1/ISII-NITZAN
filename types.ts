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
  fullName: "User Name",
  position: "Role",
  phone: "+57 300 222 3333",
  email: "company.email@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=johndoe",
  personalLinkedin: "https://www.linkedin.com/in/username",
  showLinkedin: true,
};