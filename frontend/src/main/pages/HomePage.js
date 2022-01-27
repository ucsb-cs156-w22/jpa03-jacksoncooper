import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

export default function HomePage() {
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Hello, world!</h1>
        <p>
          This is a webapp containing a bunch of different Spring Boot/React examples.
          Let's add a frog.
        </p>
        <img
          src='https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg.thumb.1160.1160.jpg'
          alt='A frog in a leaf.'
        />
      </div>
    </BasicLayout>
  )
}
