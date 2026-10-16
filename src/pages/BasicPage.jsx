import { Link } from "react-router";
export function Home() {
    return <section><h1>Elijah Holman</h1>
        <p>CS student interested in accessible web tools.</p>
        <Link to="/projects">Explore my projects</Link></section>;
}
export function Experience() {
    return <section><h1>Experience</h1>
        <p>CompTIA A+ certified IT Support with hands-on experience supporting Windows and macOS environments, Microsoft Azure, networking, cabling, and enterprise ticketing systems. Able to troubleshoot hardware, software, and connectivity issues. Have strong problem-solving skills in a part-time IT support role.</p></section>;
}
export function Contact() {
    return <section><h1>Contact</h1>
        <p>This fictional person has no real contact address.</p></section>;
}
export function NotFound() {
    return <section><h1>Page not found</h1>
        <Link to="/">Return home</Link></section>;
}