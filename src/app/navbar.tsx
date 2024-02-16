import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { isAuthenticated } = await getKindeServerSession();
  return (
    <div className="flex justify-end gap-x-8 px-8 py-4 font-medium">
      {(await isAuthenticated()) ? (
        <>
          <LogoutLink>Log out</LogoutLink>
        </>
      ) : (
        <>
          <LoginLink orgCode="org_5e340e3d31e">Sign in</LoginLink>

          <RegisterLink orgCode="org_5e340e3d31e">Sign up</RegisterLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
