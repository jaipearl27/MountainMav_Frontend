const documents = [
  {
    id: 1,
    title: "Title 1",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 2,
    title: "Title 2",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 3,
    title: "Title 3",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 4,
    title: "Title 4",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 5,
    title: "Title 5",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 6,
    title: "Title 6",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
  {
    id: 7,
    title: "Title 7",
    info: " All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.",
  },
];

const ImportantDocuments = () => {
  return (
    <div className="bg-black h-full pb-8">
      <h1 className="text-white font-bold text-3xl flex items-center justify-center  pt-4">
        {" "}
        Important Documents{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 px-8">
        {documents.map((document) => (
          <div
            key={document.id}
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          >
            <div className="p-6">
              <h3 className="mb-4 text-xl font-medium text-slate-700">
                {document.title}
              </h3>
              <p>{document.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDocuments;
