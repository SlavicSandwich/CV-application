import CollapsedForm from "./CollapsedForm";
import React from "react";

export default function DisplayForms({
  forms,
  FormComponent,
  onChange,
  onCancel,
  onHide,
  onRemove,
  toggleCollapsed,
  titleKey,
  arrayName,
}) {
  let flag = false;
  let form_return;
  forms.forEach((form) => {
    if (!form.isCollapsed) {
      flag = true;
      form_return = form;
    }
  });

  return flag ? (
    <div className="forms-container">
      <FormComponent
        onChange={onChange}
        form={form_return}
        key={form_return.id}
        onCancel={onCancel}
        onRemove={onRemove}
        onSave={toggleCollapsed}
      />
    </div>
  ) : (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedForm
            onClick={toggleCollapsed}
            key={form.id}
            form={form}
            title={form[titleKey]}
            arrayName={arrayName}
            hideForm={onHide}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            onCancel={onCancel}
            onSave={toggleCollapsed}
            onRemove={onRemove}
          />
        )
      )}
    </div>
  );
}

// export default function DisplayForms({
//   forms,
//   FormComponent,
//   onChange,
//   onCancel,
//   onHide,
//   onRemove,
//   toggleCollapsed,
//   titleKey,
//   arrayName,
// }) {
//   return (
//     <div className="forms-container">
//       {forms.map((form) => {
//         <React.Fragment key={form.id}>
//           form.isCollapsed ? (
//           <CollapsedForm
//             onClick={toggleCollapsed}
//             // key={form.id}
//             form={form}
//             title={form[titleKey]}
//             arrayName={arrayName}
//             hideForm={onHide}
//           />
//           ) : (
//           <FormComponent
//             onChange={onChange}
//             form={form}
//             // key={form.id}
//             cancel={onCancel}
//             save={toggleCollapsed}
//             remove={onRemove}
//           />
//           )
//         </React.Fragment>;
//       })}
//     </div>
//   );
// }
