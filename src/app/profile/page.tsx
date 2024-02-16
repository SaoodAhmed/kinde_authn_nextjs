import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
  const { getUser,isAuthenticated, getPermissions } = await getKindeServerSession();
  const permissions = await getPermissions();
  const user = await getUser();
  console.log(permissions)
  console.log(user);
  return (
    <div className="flex justify-center items-center flex-col">
        {
            await isAuthenticated()?
            <>
            <h1 className="text-2xl">Profile: {user?.family_name}</h1>
            <h1 className="text-2xl">Profile: {user?.email}</h1>
            </>:<p>Sing in now</p>
        }
    </div>
  );
};

export default Profile;
