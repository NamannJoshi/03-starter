import SubBtn from "@/components/form/Btn";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <section className="grid grid-cols-2 gap-4 mt-4">
            <FormInput
              name="first name"
              type="text"
              placeholder="enter your first name"
              label="first name"
              defaultValue="Bhole"
            />
            <FormInput
              name="last name"
              type="text"
              label="last name"
              placeholder="enter your last name"
              defaultValue="shankar"
            />
            <FormInput
              name="username"
              type="text"
              label="username"
              placeholder="enter your username"
              defaultValue="mahaadev"
            />
          </section>
          <SubBtn name="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfilePage;
