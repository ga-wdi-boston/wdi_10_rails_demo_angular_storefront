class LineItemsController < ApplicationController
	def create
		product = Product.find(params[:product_id])
		line_item = product.line_items.build(user: current_user)
		line_item.save
		redirect_to :cart
	end

	def index
		@line_items = current_user.line_items.in_cart
	end

	def delete
		LineItem.find(params[:id]).destroy
		redirect_to :cart
	end
end