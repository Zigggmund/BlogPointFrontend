// import { FC, ReactNode, useContext, useEffect, useLayoutEffect } from 'react';
// import { Loader } from '@mantine/core';
// import { useGetProfile } from '@modules/profile/hooks/useGetProfile';
//
// interface IProfileLoaderProps {
//   children?: ReactNode;
// }
//
// export const ProfileLoader: FC<IProfileLoaderProps> = props => {
//   const profileManager = useGetProfile();
//
//   useLayoutEffect(() => {
//     if (profileController) profileController.infoUserMutation.mutate();
//   }, []);
//
//   useEffect(() => {}, [profileController?.infoUserMutation.isIdle]);
//
//   if (profileController?.infoUserMutation.isPending) return <Loader />;
//   else return <>{props.children}</>;
// };
