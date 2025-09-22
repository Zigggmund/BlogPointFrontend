// import { FC, ReactNode, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGetProfile } from '@modules/profile/hooks/useGetProfile.ts';
//
// interface IPrivateRouterProps {
//   children?: ReactNode;
// }
//
// export const PrivateRouter: FC<IPrivateRouterProps> = props => {
//   const [isFetched, setIsFetched] = useState<boolean>(false);
//   const profileManager = useGetProfile();
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     if (!profileManager.isPending && isFetched) {
//       navigate('/');
//     }
//   }, [profileManager.data?.data]);
//
//   useEffect(() => {
//     if (profileManager.isPending) return setIsFetched(true);
//   }, [profileManager.isPending]);
//
//   return <>{props.children}</>;
// };
