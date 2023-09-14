import { useRouter } from "next/navigation";
import { PostType } from "../../types/global-types";
import { Dispatch, FC, SetStateAction } from "react";

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
    <section className="border">
      <h2 className="text-2xl font-bold titleGradiant mt-2">
        <span>{type} Post</span>
      </h2>
      <p>{type} AI you've found usefull and share with others</p>

      <form onSubmit={handleSubmit} className="form flex flex-col gap-3 border">
        <label className="form__item">
          <span>Name of AI </span>
          <input
            className="form__input border"
            type="text"
            required
            value={post.aiName}
            onChange={(e) => setPost({ ...post, aiName: e.target.value })}
          />
        </label>
        <label className="form__item">
          <span>About this AI </span>
          <textarea
            className="form__input border"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          />
        </label>
        <label className="form__item">
          <span>Tag(s) </span>
          <input
            className="form__input border"
            type="text"
            placeholder="#tag1,#tag2,..."
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </label>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
        <button onClick={handleCancel}>cancel</button>
      </form>
    </section>
  );
};

export default Form;
