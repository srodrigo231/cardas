import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

export default function Header() {
    return (
        <div className="header">
            <FontAwesomeIcon icon="fab fa-salesforce" size="5x" />
        </div>
    );
}
