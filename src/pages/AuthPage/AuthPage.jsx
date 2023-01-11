import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';



export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const [swap, setSwap] = useState(false);


  return (
    <main className={styles.AuthPage}>
      {
        swap ?
          <>
            <div>
              <Logo />
              <h3 onClick={() => setShowLogin(!showLogin)}>{!showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
            {!showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
          </>
          :
          <>
            <div>
              <Logo />
              <h3 onClick={() => setSwap(true)}>ENTER</h3>
            </div>
          </>
      }
    </main >
  );
}



// export default function AuthPage({ setUser }) {
//   const [showLogin, setShowLogin] = useState(true);
//   const [load, setLoad] = useState(false);

//   const handleClick = (bool) => {
//     setLoad(true);
//     setShowLogin(bool);
//   };

//   return (
//     <main className={styles.AuthPage}>
//       <div>
//         <Logo />
//         {!load ? (
//           <div>
//             <h3 onClick={() => handleClick(true)}>LOGIN</h3>
//             <h3 onClick={() => handleClick(false)}>SIGN UP</h3>
//           </div>
//         ) : (
//           <h3 onClick={() => setShowLogin(!showLogin)}>
//             {showLogin ? "SIGN UP" : "LOG IN"}
//           </h3>
//         )}
//       </div>
//       {showLogin ? (
//         <LoginForm setUser={setUser} />
//       ) : (
//         <SignUpForm setUser={setUser} />
//       )}
//     </main>
//   );
// }