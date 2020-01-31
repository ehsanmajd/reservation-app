import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faSortAlphaUpAlt,
	faStar,
	faPoundSign,
	faAngleRight,
	faAngleDown
} from '@fortawesome/free-solid-svg-icons';

export default function setupIcons() {
	library.add(
		faSortAlphaUpAlt,
		faStar,
		faPoundSign,
		faAngleRight,
		faAngleDown
	);
}

