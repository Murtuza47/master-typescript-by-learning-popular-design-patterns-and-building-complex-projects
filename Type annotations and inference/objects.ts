const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lats: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lats, lng },
}: { coords: { lats: number; lng: number } } = profile;
