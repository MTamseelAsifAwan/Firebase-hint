import { useState, useEffect } from 'react';
import { firestore, auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import DataForm from './realtimedatabase';
import DisplayData from './realtimedisplay';

const FirestoreDisplay = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  const displayData = async () => {
    try {
      const response = await getDocs(collection(firestore, 'cities'));
      const dataItems = response.docs.map(doc => ({ ...doc.data() }));
      setCitiesData(dataItems);
    } catch (error) {
      console.log('Fetching error of data', error);
    }
  };

  const loginhandle = () => {
    navigate('/Login');
  }

  useEffect(() => {
    displayData();

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('please login first ');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav className='flex justify-around'>
        <ul className='flex'>
          <li className='mr-4'>
            <a href='#' className='text-gray-900 hover:text-red-900 font-bold'>Home</a>
          </li>
          <li className='ml-60 mr-8'>
            <a href='#' className='text-gray-900 hover:text-red-900 flex font-bold '>
              {userEmail && <span>{userEmail}</span>}
            </a>
          </li>
          <li>
            <a>
              <button className='bg-purple-600 text-white border rounded-lg w-20 font-bold' onClick={() => auth.signOut()}>Logout</button>
            </a>
          </li>
          <li>
            <a>
              <button className='bg-purple-600 text-white border rounded-lg w-20 font-bold' onClick={loginhandle}>Login</button>
            </a>
          </li>
        </ul>
      </nav>
      <h1 className='text-gray-700 text-xl font-bold mb-6'>Data</h1>
      {citiesData.map((item) => (
        <p className='font-bold text-xl mb-8' key={item.id}>{item.name}</p>
//         <div
//   class="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
// >
//   <div
//     class="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
//   >
//     <div class="flex gap-1">
//       <svg
//         stroke-linejoin="round"
//         stroke-linecap="round"
//         stroke-width="1"
//         fill="none"
//         viewBox="0 0 24 24"
//         class="fill-gray-300 rotate-[24deg]"
//         height="200"
//         width="200"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon
//           points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
//         ></polygon>
//       </svg>
//     </div>
//   </div>
//   <div
//     class="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
//   ></div>
//   <div class="para uppercase text-center leading-none z-40">
//     <p class="text-black font-semibold text-xs font-serif">Best</p>
//     <p class="font-bold text-xl tracking-wider text-gray-500">Fashion</p>
//   </div>
//   <div class="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
//     <svg
//       xml:space="preserve"
//       viewBox="0 0 498.608 498.608"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//       xmlns="http://www.w3.org/2000/svg"
//       id="Layer_1"
//       version="1.1"
//     >
//       <g>
//         <ellipse
//           ry="72.08"
//           rx="73"
//           cy="76.72"
//           cx="249.3"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="63.48"
//           cx="177.388"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="44.816"
//           cx="201.388"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="91.488"
//           cx="164.084"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="118.144"
//           cx="164.084"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="20.408"
//           rx="20.664"
//           cy="139.728"
//           cx="160.42"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="20.408"
//           rx="20.664"
//           cy="160.408"
//           cx="153.092"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="17.448"
//           rx="17.664"
//           cy="17.448"
//           cx="215.42"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="17.448"
//           rx="17.664"
//           cy="19.488"
//           cx="237.868"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="63.48"
//           cx="321.204"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="44.816"
//           cx="297.204"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="91.488"
//           cx="334.532"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="26.664"
//           rx="27"
//           cy="118.144"
//           cx="334.532"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="20.408"
//           rx="20.664"
//           cy="139.728"
//           cx="338.188"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="20.408"
//           rx="20.664"
//           cy="160.408"
//           cx="345.548"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="17.448"
//           rx="17.664"
//           cy="17.448"
//           cx="283.228"
//           style="fill:#042635;"
//         ></ellipse>
//         <ellipse
//           ry="17.448"
//           rx="17.664"
//           cy="19.488"
//           cx="260.748"
//           style="fill:#042635;"
//         ></ellipse>
//       </g>
//       <polygon
//         points="450.252,366.408 297.308,319.168 297.308,306.608 201.308,306.608 201.308,319.168 
//                     	48.356,366.408 57.308,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
//         style="fill:#CC9789;"
//       ></polygon>
//       <polygon
//         points="450.252,366.408 297.308,319.168 297.308,306.608 201.308,306.608 201.308,319.168 
//                     	48.356,366.408 103.404,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
//         style="fill:#BF8377;"
//       ></polygon>
//       <polygon
//         points="450.252,366.408 297.308,319.168 297.308,305.656 246.236,301.48 244.668,319.168 
//                     	253.868,366.408 303.164,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
//         style="fill:#A06660;"
//       ></polygon>
//       <path
//         d="M353.972,165.472c0,35.344-51.264,64-104.672,64c-53.376,0-104.656-28.656-104.656-64
//                     	s51.28-64,104.656-64C302.708,101.472,353.972,130.128,353.972,165.472z"
//         style="fill:#042635;"
//       ></path>
//       <g>
//         <rect
//           height="112"
//           width="96"
//           style="fill:#BF8377;"
//           y="218.608"
//           x="201.308"
//         ></rect>
//         <polygon
//           points="290.084,311.312 249.308,416.152 199.804,335.424 249.308,285.92"
//           style="fill:#BF8377;"
//         ></polygon>
//       </g>
//       <polygon
//         points="297.308,343.808 297.308,218.608 202.284,218.608 281.46,442.96"
//         style="fill:#A06660;"
//       ></polygon>
//       <path
//         d="M324.268,134.128c0,72.24-36.624,137.624-74.944,137.624s-74.96-65.376-74.96-137.624
//                     	s36.64-84.288,74.96-84.288S324.268,61.888,324.268,134.128z"
//         style="fill:#CC9789;"
//       ></path>
//       <path
//         d="M249.324,49.84c38.32,0,74.944,12.048,74.944,84.288s-36.624,137.624-74.944,137.624"
//         style="fill:#BF8377;"
//       ></path>
//       <g>
//         <path
//           d="M259.74,45.08c0,0-69.656,53.328,89.92,117.568c0,0,3.064-70.688-23-101.504
//                     		c-26.08-30.8-66.44-27-66.44-27L259.74,45.08z"
//           style="fill:#042635;"
//         ></path>
//         <path
//           d="M284.692,35.968c0,0,64.16,71.112-135.672,132.048c0,0-11.784-75.976,18.984-108.528
//                     		c30.76-32.552,85.92-27.144,85.92-27.144L284.692,35.968z"
//           style="fill:#042635;"
//         ></path>
//       </g>
//       <circle
//         r="4.672"
//         cy="284.128"
//         cx="332.988"
//         style="fill:#E5C15C;"
//       ></circle>
//       <g>
//         <path
//           d="M196.812,466.152c0,0,70.008-2,119.336-68s51.328-66,78-54.672
//                     		c26.664,11.344-25.344-2-18.672,130.672c1.064,21.344-16.672-5.328-16.672-5.328l-81.328,2.656l-39.984,2.488L196.812,466.152z"
//           style="fill:#744196;"
//         ></path>
//         <path
//           d="M301.804,466.152c0,0-70.008-2-119.336-68s-51.336-66-78-54.672
//                     		c-26.664,11.344,25.344-2,18.672,130.672c-1.064,21.344,16.664-5.328,16.664-5.328l81.336,2.656l39.984,2.488L301.804,466.152z"
//           style="fill:#744196;"
//         ></path>
//       </g>
//       <path
//         d="M387.724,498.608c-20.88-80-56.76-34-138.416-34c-81.664,0-117.536-46-138.416,34H387.724z"
//         style="fill:#9461AF;"
//       ></path>
//       <path
//         d="M113.308,498.608h274.416c-20.872-80-56.416-34.496-137.208-34"
//         style="fill:#744196;"
//       ></path>
//       <g>
//         <path
//           d="M154.3,188.312c-17.384,0-31.504,14.112-31.504,31.504s14.12,31.504,31.504,31.504
//                     		c17.4,0,31.504-14.112,31.504-31.504S171.7,188.312,154.3,188.312z M154.3,237.312c-9.648,0-17.496-7.832-17.496-17.504
//                     		s7.84-17.504,17.496-17.504c9.664,0,17.504,7.832,17.504,17.504S163.964,237.312,154.3,237.312z"
//           style="fill:#9461AF;"
//         ></path>
//         <path
//           d="M344.3,188.312c-17.384,0-31.496,14.112-31.496,31.504s14.112,31.504,31.496,31.504
//                     		c17.4,0,31.504-14.112,31.504-31.504S361.7,188.312,344.3,188.312z M344.3,237.312c-9.648,0-17.504-7.832-17.504-17.504
//                     		s7.848-17.504,17.504-17.504c9.664,0,17.504,7.832,17.504,17.504S353.964,237.312,344.3,237.312z"
//           style="fill:#9461AF;"
//         ></path>
//         <path
//           d="M317.692,308.824c0,26.496-30.064,48-67.168,48c-37.096,0-67.168-21.504-67.168-48
//                     		c0-26.512,30.072-8,67.168-8C287.628,300.824,317.692,282.312,317.692,308.824z"
//           style="fill:#9461AF;"
//         ></path>
//       </g>
//       <path
//         d="M317.692,308.824c0,26.496-30.064,48-67.168,48c-37.096,0-67.168-21.504-67.168-48
//                     	c0-26.512,30.072,21.328,67.168,21.328C287.628,330.152,317.692,282.312,317.692,308.824z"
//         style="fill:#744196;"
//       ></path>
//       <polygon
//         points="303.644,302.152 324.316,262.152 358.316,260.152 349.644,286.152 314.316,300.152"
//         style="fill:#9461AF;"
//       ></polygon>
//       <polygon
//         points="295.644,324.152 314.316,300.152 356.316,303.48 379.644,325.48 350.316,331.48 
//                     	313.644,310.152"
//         style="fill:#744196;"
//       ></polygon>
//       <g>
//         <circle
//           r="3.76"
//           cy="477.728"
//           cx="143.068"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="162.348"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle r="3.76" cy="477.728" cx="181.7" style="fill:#F476D3;"></circle>
//         <circle
//           r="3.76"
//           cy="477.728"
//           cx="201.02"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.768"
//           cy="477.728"
//           cx="220.332"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="239.644"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="258.988"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="278.284"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="297.628"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.752"
//           cy="477.728"
//           cx="316.924"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.76"
//           cy="477.728"
//           cx="336.236"
//           style="fill:#F476D3;"
//         ></circle>
//         <circle
//           r="3.76"
//           cy="477.728"
//           cx="355.548"
//           style="fill:#F476D3;"
//         ></circle>
//       </g>
//     </svg>
//   </div>
//   <div
//     class="btm-_container z-40 flex flex-row justify-between items-end gap-10"
//   >
//     <div class="flex flex-col items-start gap-1">
//       <div class="inline-flex gap-3 items-center justify-center">
//         <div class="p-1 bg-white flex items-center justify-center rounded-full">
//           <svg
//             stroke-linejoin="round"
//             stroke-linecap="round"
//             stroke-width="1"
//             fill="none"
//             viewBox="0 0 24 24"
//             class="fill-gray-800 h-3 w-3 stroke-none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
//             ></path>
//           </svg>
//         </div>
//         <p class="font-semibold text-xs text-white">+1234 456 780</p>
//       </div>
//       <div class="flex flex-row gap-2">
//         <div class="inline-flex gap-3 items-center justify-center">
//           <div
//             class="p-1 bg-white flex items-center justify-center rounded-full"
//           >
//             <svg
//               stroke-linejoin="round"
//               stroke-linecap="round"
//               stroke-width="1"
//               fill="none"
//               viewBox="0 0 24 24"
//               class="fill-gray-800 h-3 w-3 stroke-white"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
//               ></path>
//               <polyline points="22,6 12,13 2,6"></polyline>
//             </svg>
//           </div>
//           <p class="font-semibold text-xs text-white">email@gmail.com</p>
//         </div>
//       </div>
//     </div>
//     <div class="btn">
//       <button
//         class="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800"
//       >
//         ORDER NOW
//       </button>
//     </div>
//   </div>
// </div>

      ))}
      <div>
        <DataForm />
        <h1 className='font-bold text-xl'>realtime display</h1>
        <DisplayData/>
      </div>
    </>
  );
};

export default FirestoreDisplay;