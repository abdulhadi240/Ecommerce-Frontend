async function performJoinQuery() {
    const { data, error } = await supabase
      .from('orders')
      .select(
        `
        orders.id,
        orders.order_date,
        orders.total_amount,
        customers.name as customer_name,
        products.name as product_name
        `
      )
      .innerJoin('customers', 'orders.customer_id', 'customers.id')
      .innerJoin('products', 'orders.product_id', 'products.id');
  
    if (error) {
      console.error(error);
      return;
    }
  
    console.log(data);
  }