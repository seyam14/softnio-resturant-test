function FoodItems() {
    const foodItems = [
      { name: 'Vegetable Burger', description: 'Delicious and healthy burger' },
      { name: 'Special Pizza', description: 'Delicious Italian pizza' },
      // Add more items as needed
    ];
  
    return (
      <section className="p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {foodItems.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default FoodItems;
  