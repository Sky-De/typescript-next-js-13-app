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
  return (
    <section>
      <h2 className="text-2xl font-bold titleGradiant mt-2">
        <span>{type} Post</span>
      </h2>
      <p>{type} AI you've found usefull and share with others</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>
          <span>Name of AI </span>
          <input
            type="text"
            required
            value={post.aiName}
            onChange={(e) => setPost({ ...post, aiName: e.target.value })}
          />
        </label>
        <label className="flex items-center">
          <span>About this AI </span>
          <textarea
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
          />
        </label>
        <label>
          <span>Tag(s) </span>
          <input
            type="text"
            placeholder="#tag1,#tag2,..."
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </label>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Form;
