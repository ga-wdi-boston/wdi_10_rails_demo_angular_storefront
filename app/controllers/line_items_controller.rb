class LineItemsController < ApplicationController
	def create
		@product = Product.find(params[:product_id])
		@line_item = @product.line_items.build(user: current_user)
		binding.pry
	end

	def index
		@line_items = LineItems.all
	end
end