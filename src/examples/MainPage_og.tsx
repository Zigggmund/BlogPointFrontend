// import { MainPageFrame } from '@modules/channel/components/MainPageFrame/MainPageFrame.tsx';
// import { Container, Flex, Image } from '@mantine/core';
// import {
//   darkBackgroundColor,
//   mainBackgroundColor,
//   skyBlueColor,
// } from '@constants';
// import { Carousel } from '@mantine/carousel';
// import {
//   popularChannels,
//   recommendations,
// } from '@modules/channel/constants/stoppers.ts';
//
// function MainPage() {
//   return (
//     <Flex
//       ml={{ sm: '50px', base: '0px' }} // в совсем узких окнах отступа нет
//       id="mainPageFlexbox"
//       gap="25px"
//       direction="column"
//       wrap="wrap"
//       w="100%"
//       // style={{overflow: 'hidden'}}
//     >
//       <Container
//         id="bannerContainer"
//         bg={mainBackgroundColor}
//         h="160px"
//         // m='15px 0px' // выравнивание по началу
//         m="15px auto"
//         bd="2px solid black"
//         display="flex"
//         w="100%"
//         style={{
//           borderRadius: '20px',
//           maxWidth: '650px',
//         }}
//       >
//         <Flex align="center" justify="center" w="100%">
//           <Image h="80%" src={'/assets/images/Logo.png'} />
//           <span style={{ fontSize: '65px' }}>BlogPoint</span>
//         </Flex>
//       </Container>
//
//       <Container id="recommendationContainer">
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <span style={{ fontSize: '48px', fontWeight: 600 }}>
//             Рекомендации
//           </span>
//         </div>
//         {/*<div style={{overflow:'hidden'}}>*/}
//         {/*    <Flex*/}
//         {/*        id='recommendationFeed'*/}
//         {/*        mb='40px 0px 30px'*/}
//         {/*        gap='40px'*/}
//         {/*        w='auto'*/}
//         {/*    >*/}
//         <Carousel
//           id="recommendationFeed"
//           withIndicators
//           slideSize="33.333333%"
//           slideGap="40px"
//           loop
//           controlSize="50"
//           styles={{
//             // border: `2px solid ${mainBackgroundColor}`, // Цвет границы
//             // borderRadius: '12px', // Скругление для контролов
//
//             control: {
//               backgroundColor: skyBlueColor,
//               color: 'white',
//               transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
//               zIndex: 10, // Выводит стрелки поверх слайдов
//             },
//             controls: {
//               top: '50%',
//               left: 'calc(-100px)', // сдвигает левую стрелку за пределы карусели
//               right: 'calc(-100px)', // сдвигает правую стрелку за пределы карусели
//             },
//             indicator: {
//               backgroundColor: skyBlueColor,
//               margin: '10px 0 10px',
//               width: '30px',
//               height: '10px',
//               transition: 'width 250ms ease',
//             },
//             indicators: {
//               position: 'relative', // Делает индикаторы отдельным блоком
//               top: '20px', // Добавляет отступ сверху
//             },
//           }}
//         >
//           {recommendations.map((el, _) => (
//             <Carousel.Slide key={el.id}>
//               <RecommendationPost
//                 id={el.id}
//                 title={el.title}
//                 text={el.text}
//                 channelName={el.channelName}
//                 mediaType={el.mediaType}
//                 mediaURL={el.mediaURL}
//               />
//             </Carousel.Slide>
//           ))}
//         </Carousel>
//         {/*</Flex>*/}
//         {/*</div>*/}
//       </Container>
//
//       {/*Просто линия*/}
//       <Container fluid h="8px" m="0px" bg={darkBackgroundColor}></Container>
//
//       <Container id="popularChannelsContainer">
//         <div style={{ textAlign: 'center' }}>
//           <span style={{ fontSize: '48px', fontWeight: 600 }}>
//             Популярные каналы
//           </span>
//         </div>
//         <Flex
//           id="recommendationFeed"
//           m="20px 0px"
//           gap="30px"
//           direction="column"
//           w="100%"
//         >
//           {popularChannels.map((el, _) => (
//             <PopularChannelItem
//               id={el.id}
//               channelName={el.channelName}
//               description={el.description}
//               subscriberNumber={el.subscriberNumber}
//               imageURL={el.imageURL}
//             />
//           ))}
//         </Flex>
//       </Container>
//     </Flex>
//   )
// }
//
// export default MainPage;
