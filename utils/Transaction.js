const { data, error } = await supabase.transaction(async (tx) => {
    // insert a new order into the "orders" table
    const { data: orderData, error: orderError } = await tx
      .from('orders')
      .insert({ customer_id: 123, total_amount: 99.99 })
      .single();
  
    if (orderError) {
      throw new Error(`Failed to insert order: ${orderError.message}`);
    }
  
    // update the customer's balance in the "customers" table
    const { data: customerData, error: customerError } = await tx
      .from('customers')
      .update({ balance: 500.00 })
      .eq('customer_id', 123);
  
    if (customerError) {
      throw new Error(`Failed to update customer balance: ${customerError.message}`);
    }
  
    // return the order and customer data
    return { order: orderData, customer: customerData };
  });
  
  if (error) {
    console.error(`Transaction failed: ${error.message}`);
  } else {
    console.log(`Transaction succeeded: ${JSON.stringify(data)}`);
  }
  