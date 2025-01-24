// import Link from "next/link";
// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-50">
//       <h1 className="mb-6 text-4xl font-bold">Welcome to WEAVHR</h1>
//       <ul className="flex items-center gap-4">
//         <li>
//           <Link
//             href="/auth/register"
//             className="px-6 py-2 text-lg text-white transition bg-blue-600 rounded shadow-md hover:bg-blue-700"
//           >
//             Register
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/auth/login"
//             className="px-6 py-2 text-lg text-white transition bg-green-600 rounded shadow-md hover:bg-green-700"
//           >
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/auth/welcome"
//             className="px-6 py-2 text-lg text-white transition bg-purple-600 rounded shadow-md hover:bg-purple-700"
//           >
//             Welcome
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/settings/staff"
//             className="px-6 py-2 text-lg text-white transition bg-purple-600 rounded shadow-md hover:bg-purple-700"
//           >
//             Dashboard
//           </Link>
//         </li>
//       </ul>
//     </main>
//   );
// }

// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect the user to the /auth/register page
  redirect("/auth/login");
}
