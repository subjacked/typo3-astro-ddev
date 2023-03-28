import { counter } from '@stores/demoStore';
import { useStore } from '@nanostores/preact';

export default function DemoPreact() {
  const $count = useStore(counter)
  const increment = () => (counter.set(JSON.stringify(parseInt(counter.get()) + 1)))
  const decrement = () => (counter.set(JSON.stringify(parseInt(counter.get()) - 1)))

  return (
    <>
    <div class="bg-blue-400 p-4 rounded-lg flex flex-col items-center justify-center">
      <h2 class="text-2xl mb-4">Preact Component in vue slot</h2>
      <div class="flex flex-row">
        <button className="bg-white rounded-md w-6 mr-3" onClick={decrement}>-</button>
        <div class="text-2xl font-bold">{$count}</div>
        <button className="bg-white rounded-md w-6 ml-3" onClick={increment}>+</button>
      </div>
    </div>
    </>
  )
}