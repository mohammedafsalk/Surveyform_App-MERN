import Theme from "../Theme/Theme";

export default function Form() {
  const form = ["F", "O", "R", "M"]
  const val = Math.floor(Math.random() * form.length);

  return (
    <div className="h-screen duration-300 dark:bg-black dark:text-white">
      <div className="relative">
        <Theme />
      </div>
      <div className="text-center text-5xl font-extrabold pt-5">
      {form.map((char, i) => {
          return (
            <span key={i} className={i === val ? "text-red-500 dark:text-white" : ""}>
              {char}{" "}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-5 px-5">
          <input type="text" />
      </div>
    </div>
  );
}
