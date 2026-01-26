
export interface SignatureData {
  fullName: string;
  position: string;
  company: string;
  phone: string;
  email: string;
  photoUrl: string;
  companyLogoUrl: string;
}

export const INITIAL_DATA: SignatureData = {
  fullName: "John Doe",
  position: "Marketing Director",
  company: "Greenspec",
  phone: "+1 555 000 000",
  email: "user@greenspec.nl",
  photoUrl: "https://i.pravatar.cc/150?u=johndoe",
  companyLogoUrl: "", // Empty by default as per request
};
