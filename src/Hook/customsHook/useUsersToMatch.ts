import { UseUser } from "@/Hook/HookApi/UseUser";
import { useEffect } from 'react';

export const useUsersToMatch = () => {
  const { UserGetUsersToMach, usersDto } = UseUser();

  useEffect(() => {
    UserGetUsersToMach();
  }, [UserGetUsersToMach]);

  return usersDto;
};
