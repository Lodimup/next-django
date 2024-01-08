import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * A sample slow RSC component with skeleton
 * using suspense, when the data is ready, skeleton will be replaced with the component
 * Components should be atomic, able to work independently
 * so, if any component finished loading first, it will be rendered first and not blocked other
 */
export const SlowComponent = async ({ delay }: { delay: number }) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const data = {
    title: "Title",
    description: "Description",
    content: `A sample slow RSC component with skeleton with ${delay}ms delay`,
  };
  return (
    <Card className="text-">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>{data.content}</CardContent>
    </Card>
  );
};

SlowComponent.Skeleton = function SlowComponentSkeleton() {
  return (
    <Skeleton>
      <Card className="text-slate-400">
        <CardHeader>
          <CardTitle>...</CardTitle>
          <CardDescription>...</CardDescription>
        </CardHeader>
        <CardContent>...</CardContent>
      </Card>
    </Skeleton>
  );
};
