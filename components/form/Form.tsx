import { useRouter } from "next/navigation";
import { PostType } from "../../types/global-types";
import { Dispatch, FC, SetStateAction } from "react";
import Loading from "@components/loading/Loading";

// FIX--this is duplicated

type FromProps = {
  type: "Create" | "Edit";
  post: PostType;
  setPost: React.Dispatch<React.SetStateAction<PostType>>;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const Form: FC<FromProps> = (props) => {
  const { type, post, setPost, isSubmitting, handleSubmit } = props;

  const router = useRouter();
  const handleCancel = () => {
    router.back();
  };
  return (
    <section className="p-5 max-w-[350px] m-auto">
      <h2 className="text-2xl font-bold titleGradiant mt-2">
        <span>{type} Post</span>
      </h2>
      <p className="text-gray-500">
        {type} AI you've found usefull and share with others
      </p>

      <form onSubmit={handleSubmit} className="form flex flex-col gap-6 py-5">
        <label className="form__item">
          <span className="font-bold">Name of AI </span>
          <input
            className="form__input border"
            type="text"
            required
            value={post.aiName}
            onChange={(e) => setPost({ ...post, aiName: e.target.value })}
          />
        </label>
        <label className="form__item">
          <span className="font-bold">About this AI </span>
          <textarea
            className="form__input border h-[100px] resize-none"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          />
        </label>
        <label className="form__item">
          <span className="font-bold">Tag(s) </span>
          <input
            className="form__input border p-1"
            type="text"
            placeholder="#tag1,#tag2,..."
            value={post.tags.join()}
            onChange={(e) =>
              setPost({ ...post, tags: e.target.value.split(",") })
            }
          />
        </label>
        <div className="form__actions mt-3 flex justify-evenly">
          <button
            className="text-[#e75fbc] hover:opacity-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="callToActionBtn rounded-md text-white hover:opacity-50"
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </button>
        </div>
        {isSubmitting && <Loading />}
      </form>
    </section>
  );
};

export default Form;
