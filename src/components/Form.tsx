interface Props {
  createNewProject: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNewProjectName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  projectName: string;
  handleNewTargetHours: (e: React.ChangeEvent<HTMLInputElement>) => void;
  targetHours: number;
}

export function Form(props: Props) {
  const { createNewProject, handleNewProjectName, projectName, handleNewTargetHours, targetHours } =
    props;
  return (
    <>
      <form onSubmit={(e) => createNewProject(e)}>
        <input
          className="new-project-name-input"
          placeholder="enter new project name"
          type="text"
          onChange={handleNewProjectName}
          value={projectName}
        ></input>
        <input
          className="new-target-hour-input"
          onChange={handleNewTargetHours}
          value={targetHours !== 0 ? targetHours : ""}
          placeholder="enter target hours"
          type="number"
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
