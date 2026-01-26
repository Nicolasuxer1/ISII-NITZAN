
export interface SignatureData {
  fullName: string;
  position: string;
  phone: string;
  email: string;
  photoUrl: string;
  personalLinkedin: string;
}

export const INITIAL_DATA: SignatureData = {
  fullName: "John Doe",
  position: "Marketing Director",
  phone: "+1 555 000 000",
  email: "user@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=johndoe",
  personalLinkedin: "https://www.linkedin.com/in/username",
};
