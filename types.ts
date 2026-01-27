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
  fullName: "John Doe",
  position: "Lead UX / UI Designer",
  phone: "+1 234 567 8900",
  email: "john.doe@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=johndoe",
  personalLinkedin: "https://www.linkedin.com/in/username",
  showLinkedin: true,
};