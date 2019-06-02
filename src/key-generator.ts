
class KeyGenerator {

	public static generateToken(): string {
		return Math.random().toString(16).slice(2);
	}

}

export default KeyGenerator;
