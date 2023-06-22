import { Schema, model, models } from "mongoose";

const TopicSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  topicName: {
    type: String,
    unique: [true, "Topic already exists!"],
    required: [true, "Topic name is required!"],
  },
  freeHtmlContent: {
    type: String,
  },
  paidHtmlContent: {
    type: String,
  },
  metaData: {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    keywords: { type: String, required: true, trim: true },
  },
});

const Topic = models.Topic || model("Topic", TopicSchema);

export default Topic;
