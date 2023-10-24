import { OrganizationType, PublicEntityDetails, Role } from '@/model';

export interface ExperienceVm {
  name: string;
  description?: string;
  type?: string;
  roles: Role[];
}

export interface Type {
  key: OrganizationType;
  value: string;
}

export interface JobManfredAwesomicCV {
  [k: string]: unknown;
  organization: PublicEntityDetails;
  type?: OrganizationType | undefined;
  roles: [Role, ...Role[]];
}
