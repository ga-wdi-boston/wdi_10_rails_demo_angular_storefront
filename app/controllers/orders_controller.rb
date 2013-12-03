class OrdersController < ApplicationController
	def new
	end

	def create
	  # Amount in cents
	  binding.pry
	  @amount = 500

	  customer = Stripe::Customer.create(
	    email: current_user.email,
	    card: params[:stripeToken]
	  )

	  order = Stripe::Charge.create(
	    customer: customer.id,
	    amount: @amount,
	    description: 'Rails Stripe customer',
	    currency: 'usd'
	  )

	rescue Stripe::CardError => e
	  flash[:error] = e.message
	  redirect_to orders_path
	end
end
