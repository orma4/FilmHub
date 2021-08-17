export function save(key: string, data: [] | {}) {
	localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function get(key: any) {
	const item: any = localStorage.getItem(key);
	try {
	  return JSON.parse(item);
	} catch (error) {
	  return null;
	}
  }
  