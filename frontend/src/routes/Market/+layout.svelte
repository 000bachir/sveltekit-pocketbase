<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<slot />
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-48 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn m-1">Sony</div>
				<ul
					tabindex="0"
					class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="Market/Sony/Playstation4" data-sveltekit-preload-data>Playstation 4 </a></li>
					<li><a href="Market/Sony/Playstation5" data-sveltekit-preload-data>Playstation 5 </a></li>
				</ul>
			</div>
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn m-1">Steam</div>
				<ul
					tabindex="0"
					class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="Market/Steam/Windows">Windows</a></li>
					<li><a href="Market/Steam/Linux">Linux</a></li>
					<li><a href="Market/Steam/MacOs">MacOs</a></li>
				</ul>
			</div>

			<div class="dropdown">
				<div tabindex="0" role="button" class="btn m-1">Xbox</div>
				<ul
					tabindex="0"
					class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="Market/Xbox/Xbox-S-X">Xbox-S/X</a></li>
					<li><a href="Market/Xbox/Xbox360">Xbox360</a></li>
				</ul>
			</div>

			<!-- <li><a href="Market/Xbox"data-sveltekit-preload-data>Xbox</a></li>
        <li><a href="Market/Steam" data-sveltekit-preload-data>Steam</a></li>
        <li><a href="Market/Nintendo" data-sveltekit-preload-data>Nintendo</a></li> -->
		</ul>
	</div>
</div>
