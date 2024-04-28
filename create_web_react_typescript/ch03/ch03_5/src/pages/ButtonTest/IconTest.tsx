import { Icon } from "../../components";

export default function IconTest() {
  const onClick = () => alert("Icon clicked");
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">IconTest</h2>
      <div className="flex items-center justify-around mt-4">
        <Icon
          className="btn-primary btn-lg text-5xl"
          name="settings"
          onClick={onClick}
        />
        <Icon
          className="btn-secondary btn-md text-5xl"
          name="done"
          onClick={onClick}
        />
        <Icon
          className="btn-accent btn-sm text-5xl"
          name="menu"
          onClick={onClick}
        />
        <Icon
          className="btn-success btn-xs text-5xl"
          name="file_upload"
          onClick={onClick}
        />
      </div>
    </section>
  );
}
