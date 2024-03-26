import { Link } from 'react-router-dom';
import { cva } from "class-variance-authority";

// Définition de la base
const base = "p-navbar hover:text-button-bg focus:text-button-bg text-button-text font-button-secondary transition ease-in-out delay-250 inline-flex";

const btnType = cva(base, {
    variants: {
        intent: {
            main: [
                "",
                
            ],
            secondary: [
                "focus:border-b-2 focus:border-button-bg"
                // Mettre la bordure en after 
                // Changer le focus ?
      ],
    },
  },
  compoundVariants: [{ intent: "main"}],
  defaultVariants: {
    intent: "main", 
  },
});

// Exportation par défaut de la fonction NavButton
export default function NavButton({ link, intent, name }) {
  return (
    <Link to={link} className={btnType({ intent: intent })}>
      {name}
    </Link>
  );
}
