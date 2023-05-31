import { ArticlesForm, NewsForm } from 'types/articles';

export const cleanFields = (obj: ArticlesForm | NewsForm) => {
	const newObj: ArticlesForm & NewsForm = {};
	let key: keyof ArticlesForm & keyof NewsForm;

	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = obj[key];
		}
	}

	return newObj;
};
